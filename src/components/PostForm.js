import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select, Input, Button } from 'antd';

// import styles from './styles/PostForm';

const FormItem = Form.Item;
const { Option } = Select;

class PostForm extends Component {
  state = {
    submitting: false,
  }

  handleSubmit = (e) => {
    const {
      form, id, updatePost, createPost, editMode,
    } = this.props;

    e.preventDefault();
    e.stopPropagation();

    form.validateFields((err, values) => {
      if (!err) {
        this.setState({ submitting: true });

        if (editMode) {
          const { title, body } = values;

          updatePost({ id, title, body });
        } else {
          createPost(values);
        }
      }
    });
  }

  render = () => {
    const {
      form, categories, category, author, body, title, editMode,
    } = this.props;
    const { getFieldDecorator: decorator } = form;
    const { submitting } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Title"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('title', { rules: [{ required: true, message: 'Please provide a title for the post.' }], initialValue: title })(<Input />)}
        </FormItem>
        <FormItem
          label="Body"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('body', {
            rules: [{ required: true, message: 'Please provide a body for the post.' }],
            initialValue: body,
          })(<Input.TextArea />)}
        </FormItem>
        <FormItem
          label="Author"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('author', { rules: [{ required: true, message: 'Please provide an author for the post.' }], initialValue: author })(<Input disabled={editMode} />)}
        </FormItem>
        <FormItem
          label="Category"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('category', { rules: [{ required: true, message: 'Please select a category for the post.' }], initialValue: category })(<Select disabled={editMode}>
            {categories.map(cat => (
              <Option key={cat.id} value={cat.id}>
                {cat.name}
              </Option>
                ))}
          </Select>)}
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit" loading={submitting}>Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

PostForm.propTypes = {
  form: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

PostForm.defaultProps = {
  editMode: false,
  categories: [],
  author: '',
  category: '',
  title: '',
  body: '',
  id: -1,
};

export default Form.create()(PostForm);
