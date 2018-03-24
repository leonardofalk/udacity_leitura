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
    const { form, categories } = this.props;
    const { getFieldDecorator: decorator } = form;
    const { submitting } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Title"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          value={this.props.title}
        >
          {decorator('title', { rules: [{ required: true, message: 'Please provide a title for the post.' }] })(<Input />)}
        </FormItem>
        <FormItem
          label="Body"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          value={this.props.body}
        >
          {decorator('body', {
            rules: [{ required: true, message: 'Please provide a body for the post.' }],
          })(<Input.TextArea />)}
        </FormItem>
        <FormItem
          label="Author"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          value={this.props.author}
        >
          {decorator('author', { rules: [{ required: true, message: 'Please provide an author for the post.' }] })(<Input />)}
        </FormItem>
        <FormItem
          label="Category"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {decorator('category', { rules: [{ required: true, message: 'Please select a category for the post.' }] })(<Select value={this.props.category}>
            {categories.map(category => (
              <Option key={category.id} value={category.id}>
                {category.name}
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
