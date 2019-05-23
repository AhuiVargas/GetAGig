import React, { Component } from "react";
import AuthService from "../../services/auth";
import toastr from "toastr";
import { Form, Icon, Input, Button } from "antd";
import {withRouter} from 'react-router-dom'

const service = new AuthService();

class EmployerSignUp extends Component {
  state = {
    name: "",
    email: "",
    role: "Employer",
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .signup(values)
          .then(response => {
            //console.log(response);
            toastr.success("Artist created");
            return this.props.history.push('/login')
          })
          .catch(err => {
            console.log(err);
            toastr.error("Something went wrong");
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h3>Register as a Recruiter</h3>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your name!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Name"
            />
          )}
        </Form.Item>
        <Form.Item style={{ display: "none" }}>
          {getFieldDecorator("role", {
            rules: [{ required: true, message: "Please input your name!" }],
            initialValue: "Employer"
          })(
            <Input
              prefix={
                <Icon
                  type="user"
                  value="role"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="Role"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Get a Gig!
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedEmployerSignUp = Form.create({ name: "normal_login" })(EmployerSignUp);

export default withRouter(WrappedEmployerSignUp);
