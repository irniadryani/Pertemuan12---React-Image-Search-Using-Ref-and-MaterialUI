import React from "react";
import axios from "axios";
import { Container, Grid, TextField, Button, Box } from '@mui/material';

class ImageSearchJs extends React.Component {
  constructor(props) {
    super(props);
    
    // Membuat instance axios dengan url api dan client id
    this.unsplash = axios.create({
      baseURL: "https://api.unsplash.com",
      headers: {
        Authorization:
          "Client-ID I_PztWOZGZqGgPQVixNXRGOGlsB2a1skwU12LX1irrA", 
      },
    });

    this.state = {
      images: [],            // Menyimpan hasil pencarian gambar
      searchTerm: '',        // Menyimpan nilai input pencarian
      imageHeights: {}       // Menyimpan tinggi gambar untuk tata letak responsif
    };

    // Menyimpan referensi gambar
    this.imageRefs = {};
  }

  // Fungsi untuk menangani pengiriman form pencarian
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Permintaan API Unsplash untuk mencari gambar berdasarkan input pengguna
      const response = await this.unsplash.get("/search/photos", {
        params: { query: this.state.searchTerm },
      });
      const images = response.data.results;
      const imageHeights = {};
      images.forEach(image => {
        this.imageRefs[image.id] = React.createRef();
      });
      // Menyimpan hasil pencarian ke state dan memperbarui tinggi gambar
      this.setState({ images, imageHeights }, this.updateImageHeights);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Fungsi untuk menangani perubahan input pencarian
  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Fungsi untuk memperbarui tinggi gambar di state
  updateImageHeights = () => {
    const imageHeights = {};
    Object.keys(this.imageRefs).forEach(id => {
      const ref = this.imageRefs[id].current;
      if (ref) {
        imageHeights[id] = ref.clientHeight;
      }
    });
    this.setState({ imageHeights });
  };

  // Fungsi lifecycle untuk menambahkan event listener saat komponen dimuat
  componentDidMount() {
    window.addEventListener('resize', this.updateImageHeights);
  }

  // Fungsi lifecycle untuk menghapus event listener saat komponen akan dilepas
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateImageHeights);
  }

  render() {
    const { images, searchTerm, imageHeights } = this.state;

    return (
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8} md={6} textAlign="center">
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Search Anything..."
                variant="outlined"
                value={searchTerm}
                onChange={this.handleInputChange}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" type="submit">
                Search
              </Button>
            </form>
          </Grid>
        </Grid>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          marginTop="20px"
        >
          {images.map((image) => (
            <Box
              key={image.id}
              ref={this.imageRefs[image.id]}
              style={{ marginBottom: '8px', flex: `1 1 ${100 / 3}%`, boxSizing: 'border-box' }}
            >
              <img
                alt={image.alt_description}
                src={image.urls.regular}
                style={{ width: '100%', display: 'block' }}
                onLoad={this.updateImageHeights}
              />
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default ImageSearchJs;
