import React from 'react';

class EditFishForm extends React.Component {
  handleChange = e => {
    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    // update state with updateFish
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select name="status" value={status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={desc} onChange={this.handleChange} />
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button
          type="button"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
