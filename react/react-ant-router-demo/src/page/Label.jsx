import React, { Component } from 'react';
import { Spin, Alert, Button, 
  notification, Upload, Icon, Modal } from 'antd';
// 全局的
// notification 
// 实现了XX功能，利用什么 lazy-load 优化首页图片懒加载，并了解其内部实现
const openNotificationWithIcon = type => {
  console.log('type', type);
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // data:img xxxxxxxxxxxx
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class Label extends Component {
  state = {
    spinning: true,
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinning: false
      })
    }, 3000)
  }
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handleChange = ({ fileList }) => this.setState({ fileList });
  render() {
    const { spinning, fileList, previewVisible, previewImage } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Spin tip="Loading..." spinning={spinning}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </div>
        {/* <div status={true || false}>
        </div> */}
        <div className="clearfix">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null}
           onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} 
            src={previewImage} />
          </Modal>
        </div>
        <h1 title="这是一个h1">h1</h1>
      </div>
    );
  }
}

export default Label;