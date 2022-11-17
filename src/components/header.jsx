import React from "react";

export default function Header() {
  return (
      <header className="bg-grey home bg-grey">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="box_header">
                <h1 className="title_header">Sewa & Rental Mobil Terbaik di kawasan Bandung</h1>
                <p className="text_header">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a className="text_header" aria-current="page" href="/cars">
                  <button className="btn btn_custom" type="button">
                    Mulai Sewa Mobil
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="./icons/img_car.png" className="img-fluid" alt="car" />
            </div>
          </div>
        </div>
      </header>
  );
}
