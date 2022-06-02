import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";

const { useForm } = Form;

const initialState = {
  mechanicAddress: "",
  mechanicPhone: "",
  err: "",
  success: "",
};

const UpdateMechanicModal = ({ close, open, data, id }) => {
  const [formHandler] = useForm();

  const [mechanic, setMechanic] = useState(initialState);

  // const [newDetails, setNewDetails] = useState({
  //   mechanicAddress: "",
  //   mechanicPhone: "",
  // });

  const { mechanicAddress, mechanicPhone } = mechanic;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMechanic({ ...mechanic, [name]: value, err: "", success: "" });
  };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   console.log("update");
  //   try {
  //     const res = await axios.patch(
  //       `http://localhost:5000/api/mechanics/edit-mechanic/${id}`,
  //       {
  //         mechanicAddress,
  //         mechanicPhone,
  //       }
  //     );
  //     setNewMechanic({
  //       ...newDetails,
  //       err: "",
  //       success: res.data.msg,
  //     });
  //     setTimeout(function () {
  //       window.location.reload();
  //     }, 500);
  //   } catch (err) {
  //     err.response.data.msg &&
  //       setNewDetails({
  //         ...newDetails,
  //         err: err.response.data.msg,
  //         success: "",
  //       });
  //   }
  // };

  return (
    <Modal
      title="Edit Mechanic Details"
      okText="Save"
      visible={open}
      onCancel={close}
      footer={[
        <Button key="submit" type="primary">
          Submit
        </Button>,
      ]}
    >
      <Form
        name="update-form"
        autoComplete="off"
        // onFinish={handleUpdate}
        form={formHandler}
      >
        <Form.Item label="Name">
          <Input disabled value={data.mechanicName} name="mechanicName" />
        </Form.Item>
        <Form.Item label="Address">
          <Input
            name="mechanicAddress"
            onChange={handleChange}
            defaultValue={data.mechanicAddress}
          />
          {/* <input
            type="text"
            name="mechanicAddress"
            onChange={handleChange}
            defaultValue={data.mechanicAddress}
          /> */}
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            name="mechanicPhone"
            defaultValue={data.mechanicPhone}
            onChange={handleChange}
          />
          {/* <input
            name="mechanicPhone"
            defaultValue={data.mechanicPhone}
            onChange={handleChange}
          /> */}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateMechanicModal;
