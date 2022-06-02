import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table, Tag, Space, Button, Modal } from "antd";

import UpdateMechanicModal from "./UpdateMechanicModal";

const { Column } = Table;

const Mechanics = () => {
  const [mechanic, setMechanic] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [open, setOpen] = useState(false);
  const [callback, setCallback] = useState(mechanic);

  useEffect(() => {
    const getMechanic = async () => {
      try {
        const URI = await axios.get(
          "http://localhost:5000/api/mechanics/all-mechanics"
        );

        setMechanic(URI.data);
        console.log(URI.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getMechanic();
  }, [callback]);

  const showModal = (data) => {
    console.log(data);
    setModalData(data);
    setOpen(true);
  };
  const closeModal = (data) => {
    setOpen(false);
  };

  const handleDelete = (e) => {
    try {
      Modal.confirm({
        title: "Are you sure you want to delete this mechanic?",
        closable: true,
        onOk: async () => {
          await axios.delete(
            `http://localhost:5000/api/mechanics/delete-mechanic/${e.target.name}`
          );
          setCallback(!callback);
          console.log(e.target.name);
        },
      });
      console.log("mechanic deleted");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Table dataSource={mechanic} rowKey="_id">
        <Column title="Name" dataIndex="mechanicName" key="name" />
        <Column title="Address" dataIndex="mechanicAddress" key="address" />
        <Column title="Phone" dataIndex="mechanicPhone" key="phone" />
        <Column
          title="Jobs Assigned"
          dataIndex="jobs"
          key="jobs"
          render={(jobs) => (
            <>
              <Tag color="red">{jobs.length}</Tag>
            </>
          )}
        />
        <Column
          title="Action"
          dataIndex="_id"
          key="_id"
          render={(_id, data) => (
            <Space size="middle">
              <button type="link" onClick={() => showModal(data)}>
                Edit
              </button>
              <UpdateMechanicModal
                open={open}
                setOpen={showModal}
                data={modalData}
                id={_id}
                close={closeModal}
              />

              <button type="link" name={_id} onClick={handleDelete}>
                Delete
              </button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default Mechanics;
