import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CommentForm extends Component {
  state = {
    submitting: false,
  }

  handleSubmit = (e) => {
    const {
      form, id, updateComment, createComment, editMode, parentId,
    } = this.props;

    e.preventDefault();
    e.stopPropagation();

    form.validateFields((err, values) => {
      if (!err) {
        this.setState({ submitting: true });

        if (editMode) {
          const { body } = values;

          updateComment({ id, body });
        } else {
          createComment(Object.assign(values, { parentId }));
        }
      }
    });
  }

  render = () => {
    const {
      form, author, body, editMode,
    } = this.props;
    const { getFieldDecorator: decorator } = form;
    const { submitting } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Comment"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('body', { rules: [{ required: true, message: 'Please provide a comment text.' }], initialValue: body })(<Input.TextArea />)}
        </FormItem>
        <FormItem
          label="Author"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('author', {
            rules: [{ required: true, message: 'Please provide an author for the comment.' }],
            initialValue: author,
          })(<Input disabled={editMode} />)}
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit" loading={submitting}>Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

CommentForm.propTypes = {
  form: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  author: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  parentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  createComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
  editMode: false,
  author: '',
  body: '',
  id: -1,
  parentId: -1,
};

export default Form.create()(CommentForm);
