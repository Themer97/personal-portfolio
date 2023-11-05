import { Form, Input, Button } from 'antd';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
      <h1 className='title'>Contact me</h1>
      <div className={styles.form_container}>
        <Form className={styles.form}>
          <Form.Item
            name='firstname'
            label='First Name'
            rules={[
              {
                required: true,
                message: 'You need to enter your first name',
              },
            ]}
          >
            <Input
              type='text'
              placeholder='John'
              className={styles.form_input}
            />
          </Form.Item>
          <Form.Item
            name='lastname'
            label='Last Name'
            rules={[
              {
                required: true,
                message: 'You need to enter your last name',
              },
            ]}
          >
            <Input
              type='text'
              placeholder='Snow'
              className={styles.form_input}
            />
          </Form.Item>
          <Form.Item
            name='email'
            label='Your Email'
            rules={[
              {
                required: true,
                message: 'You need to enter your Email',
              },
            ]}
          >
            <Input
              type='email'
              placeholder='Email'
              className={styles.form_input}
            />
          </Form.Item>
          <Form.Item
            name='company'
            label='Your Company'
            rules={[
              {
                required: true,
                message: 'You need to enter your company name',
              },
            ]}
          >
            <Input
              type='text'
              placeholder='Company'
              className={styles.form_input}
            />
          </Form.Item>
          <Form.Item
            name='message'
            label='Your Message'
            rules={[
              {
                required: true,
                message: 'You need to enter your message',
              },
            ]}
          >
            <textarea
              cols={10}
              rows={50}
              placeholder='Your message'
              className={styles.form_input}
            />
          </Form.Item>
        </Form>
        <div className={styles.form_footer}>
          <Button
            className={styles.form_footer_button}
            type='primary'
            htmlType='submit'
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
