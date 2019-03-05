import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Form, Input } from 'antd'
const { TextArea } = Input

class AddNewsDialog extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) return
      this.props.onSubmit(values)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Modal
        title="Add A  News"
        visible={this.props.visible}
        destroyOnClose={true}
        onOk={this.handleSubmit}
        onCancel={this.props.onCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of news!' }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="Content">
            {getFieldDecorator('content')(<TextArea rows={4} />)}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

AddNewsDialog.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const AddNewsDialogWrapper = Form.create({})(AddNewsDialog)

export default AddNewsDialogWrapper