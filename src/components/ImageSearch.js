import React from "react";
import axios from "axios";
import {
  Container,
  Grid,
  TextField,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";

class ImageSearch extends React.Component {
  constructor(props) {
    super(props);
    
    // Membuat instance axios dengan konfigurasi url api dan client id
    this.unsplash = axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization: "Client-ID I_PztWOZGZqGgPQVixNXRGOGlsB2a1skwU12LX1irrA",
      },
    });

    this.state = {
      images: [],      // Menyimpan hasil pencarian gambar
      searchTerm: "",  // Menyimpan nilai input pencarian
    };
  }

  // Fungsi untuk menangani pengiriman form pencarian
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Permintaan API Unsplash untuk mencari gambar berdasarkan input pengguna
      const response = await this.unsplash.get("/search/photos", {
        params: { query: this.state.searchTerm },
      });
      // Menyimpan hasil pencarian ke state
      this.setState({ images: response.data.results });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Fungsi untuk menangani perubahan input pencarian
  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { images, searchTerm } = this.state;

    return (
      <Container style={{ marginTop: "20px" }}>
        {/* Form pencarian */}
        <div className="ui grid">
          <div className="ui row">
            <div className="ui center aligned column">
              <div className="ui action input">
                <input
                  type="text"
                  placeholder="Search Anything..."
                  value={searchTerm}
                  onChange={this.handleInputChange}
                />
                <button
                  className="ui button"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tampilan hasil pencarian gambar */}
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          style={{ marginTop: "20px" }}
        >
          {images.map((image) => (
            <ImageListItem key={image.id}>
              {/* Gambar hasil pencarian */}
              <img
                src={`${image.urls.regular}?w=248&fit=crop&auto=format`}
                srcSet={`${image.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.alt_description}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
}

export default ImageSearch;
