import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props); // Memastikan data terpassing dari parent ke child
    // Membuat 3 state untuk menyimpan nilai input yang berbeda
    this.state = {
      valueName: "",
      valueMobile: "",
      valueEmail: "",
    };

    // Memastikan masing masing handle merujuk pada handle nya masing masing bukan ke komponen atau objek lain
    // Untuk mengikat komponen
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function untuk menangani perubahan pada input form
  handleChange(event) {
    const { name, value } = event.target;
    // Memperbarui state sesuai dengan input yang berubah
    this.setState({ [name]: value });
  }

  // Function ketika form dikirim
  handleSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    const { valueName, valueMobile, valueEmail } = this.state;
    // Menampilkan alert sesuai value yang diinput
    alert(`Name: ${valueName}\nMobile: ${valueMobile}\nEmail: ${valueEmail}`);
  }

  render() {
    const { valueName, valueMobile, valueEmail } = this.state; // Mengambil nilai dari state
    return (
      // Merancang form input
      <div className="ui container">
        <form className="ui form centered" onSubmit={this.handleSubmit}>
          <div className="ten wide field">
            <label>Name</label>
            <input
              type="text"
              name="valueName" // Name harus sesuai dengan properti di state
              placeholder="Name"
              value={valueName}
              onChange={this.handleChange} // Menangani perubahan input
            />
          </div>
          <div className="ten wide field">
            <label>Mobile</label>
            <input
              type="text"
              name="valueMobile"
              placeholder="Number Phone"
              value={valueMobile}
              onChange={this.handleChange} // Menangani perubahan input
            />
          </div>
          <div className="ten wide field">
            <label>Email</label>
            <input
              type="text"
              name="valueEmail"
              placeholder="Email"
              value={valueEmail}
              onChange={this.handleChange} // Menangani perubahan input
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
