import React, { Component } from "react";
import AuthService from "../../services/auth";
import toastr from "toastr";
import { Form, Icon, Input, Button, Select } from "antd";

const service = new AuthService();

class ArtistSignUp extends Component {
  state = {
    name: "",
    email: "",
    role: "Artist",
    //  picture: '',
    mixcloud: "",
    youtube: "",
    tag: ""
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
        <h3>Register as an artist</h3>
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
            initialValue: "Artist"
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
          {getFieldDecorator("mixcloud", {
            rules: [{ required: false }]
          })(
            <Input
              prefix={<Icon type="link" style={{ color: "rgba(0,0,0,.25)", width: "100%", height:"60" }} />}
              placeholder="Mixcloud Set Link"
            />
          )}
        </Form.Item>
        <Form.Item>
          <h3>I am a: </h3>
          {getFieldDecorator("tag", {
            rules: [{ required: false, message: "Please input your email!" }]
          })(
            <Select>
              <option value="DJ">DJ</option>
              <option value="Band">Band</option>
            </Select>
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

const WrappedArtistSignUp = Form.create({ name: "normal_login" })(ArtistSignUp);

export default WrappedArtistSignUp;
