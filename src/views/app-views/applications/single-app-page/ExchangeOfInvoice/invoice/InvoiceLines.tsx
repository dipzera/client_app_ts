import React, { useState, useEffect } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import { Card, Table, Button } from "antd";
import NumberFormat from "react-number-format";
import {
  InvoiceLines as InvoiceLinesType,
  InvoiceList,
} from "../../../../../../api/edx/types";
import { RouteComponentProps, useLocation } from "react-router-dom";
import Utils from "../../../../../../utils";
import "./invoice.scss";
import { EdxService } from "../../../../../../api/edx";
import { EnInvoiceType } from ".";
interface InvoiceLines extends RouteComponentProps {
  APIKey: string;
}
const { Column } = Table;
const InvoiceLines = (props: InvoiceLines) => {
  const [linesData, setLinesData] = useState<InvoiceLinesType[]>([]);
  const [invoiceInfo, setInvoiceInfo] = useState<Partial<InvoiceList>>();
  const [loading, setLoading] = useState<boolean>(true);
  const instance = new EdxService();
  let query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    setLoading(true);
    const instanceType: "GetInvoice" | "GetSentInvoice" =
      query.get("type") === EnInvoiceType._IN ? "GetInvoice" : "GetSentInvoice";
    instance[instanceType](
      props.APIKey,
      query.get("dstart"),
      query.get("dend")
    ).then((data) => {
      setLoading(false);
      if (data && data.ErrorCode === 0) {
        const [lines] = data.InvoiceList.filter((inv) => {
          if (+inv.Number === +query.get("number")!) {
            setInvoiceInfo(inv);
            return inv;
          }
        }).map((order) => order.Lines);
        setLinesData(lines);
      }
    });
    return () => instance._source.cancel();
  }, []);
  const total = (name: any) => {
    let total = 0;
    linesData.forEach((elm) => {
      // @ts-ignore
      total += elm[name];
    });
    return total;
  };

  return (
    <Card>
      <div className="invoice-to-print">
        <div className="d-md-flex justify-content-md-between">
          <div>
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md">
                  IntelectSoft, Inc.
                </span>
                <br />
                <span>mun. Chisinau</span>
                <br />
                <span>Alba Iulia, 154</span>
                <br />
                <abbr className="text-dark" title="Phone">
                  Phone:
                </abbr>{" "}
                <span>+373 022 835312</span>
              </p>
            </address>
          </div>
          <div className="mt-3 text-right">
            <h2 className="mb-1 font-weight-semibold">
              Invoice #{invoiceInfo?.Number}
            </h2>
            <p>{Utils.fromDotNetDate(invoiceInfo?.DeliveryDate)}</p>
            <address>
              <p>
                <span className="font-weight-semibold text-dark font-size-md">
                  {invoiceInfo?.FromCompany_Name}
                </span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-4">
          <Table
            loading={loading}
            dataSource={linesData}
            className="mb-5"
            rowKey="Code"
            pagination={false}
          >
            <Column title="Product" dataIndex="Name" />
            <Column title="Unit" dataIndex="Unit" />
            <Column title="Quantity" dataIndex="Quantity" />
            <Column title="Net price" dataIndex="PriceNet" />
            <Column title="Net sum" dataIndex="TotalSumNet" />
            <Column title="VAT percent" dataIndex="VATPercent" />
            <Column title="VAT price" dataIndex="TotalVAT" />
            <Column title="Total sum" dataIndex="TotalSum" />
          </Table>
          <div className="d-flex justify-content-end">
            <div className="text-right ">
              <div className="border-bottom">
                <p className="mb-2">
                  <span>Total Amount Net: </span>
                  <NumberFormat
                    displayType={"text"}
                    value={total("TotalSumNet")}
                    suffix={" MDL"}
                    thousandSeparator={true}
                  />
                </p>
                <p>Total VAT : {total("TotalVAT")} MDL</p>
              </div>

              <h2 className="font-weight-semibold mt-3">
                <span className="mr-1">Grand Total: </span>
                <NumberFormat
                  displayType={"text"}
                  value={total("TotalSum")}
                  suffix={" MDL"}
                  thousandSeparator={true}
                />
              </h2>
            </div>
          </div>
          <p className="mt-5 invoice-text">
            <small>
              In exceptional circumstances, Financial Services can provide an
              urgent manually processed special cheque. Note, however, that
              urgent special cheques should be requested only on an emergency
              basis as manually produced cheques involve duplication of effort
              and considerable staff resources. Requests need to be supported by
              a letter explaining the circumstances to justify the special
              cheque payment
            </small>
          </p>
        </div>
        <hr className="d-print-none" />
      </div>
      <div className="text-right d-print-none print-button">
        <Button
          type="primary"
          onClick={() => Utils.printElementAlt(".invoice-to-print")}
        >
          <PrinterOutlined type="printer" />
          <span className="ml-1">Print</span>
        </Button>
      </div>
    </Card>
  );
};

export default InvoiceLines;
