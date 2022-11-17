import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";

export default function Search() {
  const [cars, setCars] = useState([]);
  const [cardCars, setCardCars] = useState([]);
  const [driverType, setDriverType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");

  const populateCars = useCallback((cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );

      return {
        ...car,
        availableAt,
      };
    });
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        const newResult = populateCars(result);
        setCars(newResult);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [populateCars]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handelSearchCars = () => {
    //console.log(driverType, date, time, capacity);

    const newDateTime = new Date(`${date} ${time}`);

    const filteredCars = cars.filter(
      (item) => item.capacity >= capacity && item.availableAt >= newDateTime
    );

    setCardCars(filteredCars);
    console.log("cars filtered: ", filteredCars);
  };

  const handelResetCars = () => {
    setCardCars([]);
  };

  return (
    <div>
      

      {/* Search Car */}
      <Container className="container-fluid p-0 search-container">
        <Form
          action=""
          method="get"
          className="d-flex justify-content-between container-md p-3 shadow bg-body rounded search-form"
        >
          {/* Pick Driver Type */}
          <Col className="filter-box me-2">
            <label
              htmlFor="typeDriverId"
              className="d-block fw-light mb-1 search-label"
            >
              Type Driver
            </label>
            <Form.Select
              name="Select Tipe Driver"
              id="typeDriverId"
              className="w-100 shadow-sm"
              onChange={(e) => setDriverType(e.target.value)}
            >
              <option>Pilih Type Driver</option>
              <option value="Dengan Sopir">Dengan Sopir</option>
              <option value="TanpaSopir (Lepas Kunci)">
                Tanpa Sopir (Lepas Kunci)
              </option>
            </Form.Select>
          </Col>
          {/* End Pick Driver Type */}
          {/* Pick Date */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="tanggal"
              className="d-block fw-light mb-1 search-label"
            >
              Tanggal
            </label>
            <input
              type="date"
              name="Tanggal"
              id="tanggal"
              className="inputbox w-100 shadow-sm"
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
          {/* End Pick Date */}
          {/* Pick Time */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="waktuJemput"
              className="d-block fw-light mb-1 search-label"
            >
              Waktu Jemput/Ambil
            </label>
            <input
              type="time"
              name="Waktu Jemput"
              id="waktuJemput"
              className="inputbox w-100 shadow-sm"
              onChange={(e) => setTime(e.target.value)}
            />
          </Col>
          {/* End Pick Time */}
          {/* Pick Penumpang */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="jumlahPenumpang"
              className="d-block fw-light mb-1 search-label"
            >
              Jumlah Penumpang (Opsional)
            </label>
            <input
              type="number"
              name="Jumlah Penumpang"
              id="jumlahPenumpang"
              className="inputbox w-100 shadow-sm"
              placeholder="Jumlah Penumpang"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Col>
          {/* End Pick Penumpang */}
          <Col className="filter-btn d-flex align-items-center justify-content-center align-items-end">
            <Button
              id="btn-carimobil"
              className="px-3 btn_custom ms-1 d-flex align-items-center justify-content-center"
              onClick={handelSearchCars}
            >
              Cari Mobil
            </Button>
            <Button
              id="btn-reset"
              className="px-3 btn_custom ms-1 d-flex align-items-center justify-content-center"
              onClick={handelResetCars}
            >
              Reset
            </Button>
          </Col>
        </Form>
      </Container>
      {/* End Search Car */}

      {/* Card */}
      <Container
        className="container-fluid p-0 gap-3"
        id="cari-mobil"
        style={{ width: "80% " }}
      >
        {cardCars.length > 0 ? (
          cardCars.sort((a,b) => (a.capacity) - (b.capacity)),
          cardCars.map((item) => (
            <Row
              className="card mx-1 my-1 "
              key={item.id}
              id="tampil-mobil"
              style={{ height: "100%" }}
            >
              <Col className="justify-content-center rounded-3  align-items-center d-flex ">
                <Card.Img
                  id="card-image"
                  src={item.image}
                  className="img-fluid mt-4 rounded-3 shadow-lg"
                  style={{ width: "270px", height: "160px" }}
                />
              </Col>
              <Card.Body className="card-body">
                <Card.Text id="card-name">Tipe Mobil {item.model} </Card.Text>
                <Card.Title className="fw-semibold" id="card-rent">
                  RP {item.rentPerDay} /hari
                </Card.Title>
                <Card.Text
                  className="card-text"
                  id="card-desc"
                  style={{ height: "25%" }}
                >
                  {item.description}
                </Card.Text>
                <Col className=" d-flex">
                  <FiUsers />
                  <Card.Text className="ms-2 mb-1" id="card-capacity">
                    {" "}
                    {item.capacity}
                  </Card.Text>
                </Col>
                <Col className=" d-flex ">
                  <CiSettings />
                  <Card.Text className="ms-2 mb-1" id="card-transmision">
                    {item.transmission}
                  </Card.Text>
                </Col>
                <Col className=" d-flex mb-3">
                  <AiOutlineCalendar />
                  <Card.Text className="ms-2" id="card-year">
                    {item.year}
                  </Card.Text>
                </Col>
                <Col className="align-self-end">
                  <Button
                    type="button"
                    className="btn btn-success fw-bold border-0 px-3 container-fluid mb-2 "
                    style={{ background: "#5cb85f" }}
                  >
                    Pilih Mobil
                  </Button>
                </Col>
              </Card.Body>
            </Row>
          ))
        ) : (
          <Row className="d-flex justify-content-center" >
            <Col className="d-flex align-items-center justify-content-center">Data Mobil Tidak Di Temukan</Col>
          </Row>
          
        )}
      </Container>

      {/* End Card */}
    </div>
  );
}
