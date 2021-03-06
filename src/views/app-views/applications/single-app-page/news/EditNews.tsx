import { Col, Form, message, Modal, Row, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Flex from "../../../../../components/shared-components/Flex";
import { DONE, UPLOADING } from "../../../../../constants/Messages";
import { ROW_GUTTER } from "../../../../../constants/ThemeConstant";
import Utils from "../../../../../utils";
import TextEditor from "../TextEditor";
import { AppService } from "../../../../../api/app";
import TranslateText from "../../../../../utils/translate";
const EditNews = ({ visible, close, news, getNews }: any) => {
  const [form] = Form.useForm();
  const [Photo, setPhoto] = useState<any>();
  const [Header, setHeader] = useState<any>();
  const [Content, setContent] = useState<any>();
  const [AppType, setAppType] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (news) {
      setPhoto(news.Photo);
      setHeader(news.Header);
      setContent(news.Content);
      setAppType(news.AppType);
    }
  }, [news]);

  const onUploadAvatar = (info: any) => {
    if (info.file.status === "uploading") {
      message.loading({
        content: TranslateText(UPLOADING),
        key: "updatable",
      });
    }
    if (info.file.status === "done") {
      message.success({
        content: TranslateText(DONE),
        key: "updatable",
        duration: 1,
      });
      Utils.getBase64(info.file.originFileObj, (imageUrl: any) => {
        setPhoto(imageUrl);
      });
    }
  };

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      return new AppService()
        .UpdateNews({
          ...news,
          Photo,
          Content,
          Header,
        })
        .then(async (data: any) => {
          setLoading(false);
          close();
          if (data && data.ErrorCode === 0) await getNews(AppType);
        });
    }, 1000);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <Modal
      visible={visible}
      onCancel={close}
      destroyOnClose
      confirmLoading={loading}
      onOk={() => {
        form.validateFields().then((values) => {
          onFinish(values);
        });
      }}
    >
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left mb-3"
      >
        <h5>Photo</h5>
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload
            onChange={onUploadAvatar}
            showUploadList={false}
            name="avatar"
            className="avatar-uploader"
            listType="picture-card"
            customRequest={Utils.dummyRequest}
            beforeUpload={Utils.beforeUploadArticle}
          >
            {Photo ? (
              <img src={Photo} alt="News article" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </Flex>
      <Form form={form} name="createNews" layout="vertical">
        <Row gutter={ROW_GUTTER}>
          <Col xs={24} sm={24} md={24}>
            <Form.Item label={"Header"}>
              <TextEditor
                apps={Header}
                handleEditorChange={(field: any) => setHeader(field)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item label={"Content"}>
              <TextEditor
                apps={Content}
                handleEditorChange={(field: any) => setContent(field)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default EditNews;
