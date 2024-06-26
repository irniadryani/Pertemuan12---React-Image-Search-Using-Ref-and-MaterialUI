import React from "react";
import axios from "axios";

class ImageSearch extends React.Component {
  constructor(props) {
    super(props);
    // Menggunakan axios dan membuat konfigurasi baseURL dan headers
    this.unsplash = axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization:
          "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296",
      },
    });

    //membuat state untuk gambar
    this.state = { images: [] };
  }

  // Function untuk mengambil data gambar dari API
  handleSubmit = async (term) => {
    try {
      const response = await this.unsplash.get("/search/photos", {
        params: { query: term },
      });
      // Menampilkan data pada console
      console.log(response.data.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <div className="ui right aligned category search">
        <div className="row">
          <div className="ui right aligned category search col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text"
              placeholder="Search Anything..."
            />
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn bg-dark text-white fs-3 mx-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSearch;
