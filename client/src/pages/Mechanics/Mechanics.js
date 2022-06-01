import React, { useState, useEffect } from "react";
import axios from "axios";

import { Table, Tag, Space, Button, Modal } from "antd";
const { Column } = Table;

const Mechanics = () => {
  const [mechanic, setMechanic] = useState();

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

  const handleDelete = (e) => {
    try {
      //   if (window.confirm("Are you sure you want to delete this account?")) {
      //     await axios.delete(
      //       `http://localhost:5000/api/mechanics/delete-mechanic/${e.target.name}`
      //     );
      //     setCallback(!callback);
      //   }
      Modal.confirm({
        title: "Are you sure you want to delete this mechanic?",
        closable: true,
        onOk: async () => {
          //   await axios.delete(
          //     `http://localhost:5000/api/mechanics/delete-mechanic/${e.target.name}`
          //   );
          console.log(e.target.name);
        },
      });
      console.log("mechanic deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Table dataSource={mechanic} rowKey="_id">
      <Column title="Name" dataIndex="mechanicName" key="mechanicName" />
      <Column
        title="Address"
        dataIndex="mechanicAddress"
        key="mechanicAddress"
      />
      <Column title="Phone" dataIndex="mechanicPhone" key="mechanicPhone" />
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
        render={(_id) => (
          <Space size="middle">
            <a>Edit </a>
            <button type="link" name={_id} onClick={handleDelete}>
              Delete
            </button>
          </Space>
        )}
      />
    </Table>
  );
};

export default Mechanics;
