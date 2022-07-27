import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useEffect } from 'react';

const SearchForm = ({finish}) => {



  const onFinish = (values) => {
    finish(values.search)
  };

  return (
    <>
      <Form
      name="basic"
      layout="inline"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      >
        <Form.Item
          name="search"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </>
  )

}

export default SearchForm