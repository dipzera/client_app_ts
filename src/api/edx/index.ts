import HttpClient from "../HttpClient";
import { API_EDX_URL } from "../../configs/AppConfig";
import { ApiResponse, ApiDecorator } from "../types";
import { InvoiceList, IOrderList } from "./edx.types";

export class EdxService extends HttpClient {
  public constructor() {
    super(API_EDX_URL);
  }

  public CheckApiKey = async (APIKey: string) =>
    this.instance.get<ApiResponse>("/CheckApiKey", {
      params: { APIKey },
    });

  public GetInvoice = async (APIKey: string, DStart: any, DEnd: any) =>
    this.instance.get<ApiDecorator<ApiResponse, "InvoiceList", InvoiceList[]>>(
      "/GetInInvoices",
      {
        params: { APIKey, DStart, DEnd },
      }
    );

  public GetOrder = async (APIKey: string, DStart: any, DEnd: any) =>
    this.instance.get<ApiDecorator<ApiResponse, "OrderList", IOrderList[]>>(
      "/GetInOrders",
      {
        params: { APIKey, DStart, DEnd },
      }
    );
}