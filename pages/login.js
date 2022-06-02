import {Card, Form, Input,Button} from "antd";
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css'
import {StepBackwardOutlined} from "@ant-design/icons";
import Link from 'next/link'

export default function Login() {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={styles.register} style={{background : "#ececec", minHeight : "100vh"}}>
            <Card  style={{ width: 400, padding : "2rem" }}>
                <div style={{marginBottom : "10px"}}>
                    <Button type="text">
                        <Link href={{pathname: '/'}}>
                            <a>
                                <StepBackwardOutlined/>back
                            </a>
                        </Link>
                    </Button>
                </div>
                <h2>Login</h2>
                <Form 
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                    rules={[
                        { required: true, message: 'Please input your email.' },
                        {pattern : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message : "Should be a valid password"}
                    ]}
                        label="Email" 
                        name="email"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item 
                        label="Password" 
                        name="password" 
                        rules={[
                                { required: true, message: 'Please input your password!' },
                                {min :8, message : "Minimum eight characters." },
                                {pattern : /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message : "Should be a valid password"}
                        ]}>
                        <Input />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
        
    )
}