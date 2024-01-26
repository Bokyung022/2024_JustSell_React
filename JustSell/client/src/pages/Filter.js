import React from "react";

function Filter() {
  return (
    <session className="filters" style={{ paddingBottom: 0 }}>
      <form action="" method="post">
        <div id="close-filter">
          <i class="fas fa-times"></i>
        </div>
        <h3>Filter your search</h3>
        <div class="flex">
          <div class="box">
            <p>Location</p>
            <input
              type="text"
              name="Location"
              required
              maxlength="50"
              placeholder="Search by city or Postal code"
              class="input"
            />
          </div>
          <div class="box">
            <p>Offer type</p>
            <select name="sellOption" class="input" required>
              <option value="sale" selected>
                Sale
              </option>
              <option value="resale">Resale</option>
              <option value="leasing">Leasing</option>
            </select>
          </div>
          <div class="box">
            <p>Property type</p>
            <select name="PropertyType" class="input" required>
              <option value="apartment" selected>
                Apartment
              </option>
              <option value="house">House</option>
              <option value="duplexTriplex">Duplex or Triplex</option>
              <option value="condo">Condo</option>
              <option value="comercialBuilding">Comercial Building</option>
            </select>
          </div>
          <div class="box">
            <p>Bedrooms</p>
            <select name="Bedrooms" class="input" required>
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6+</option>
            </select>
          </div>
          <div class="box">
            <p>Minimum budget</p>
            <select name="min" class="input" required>
              <option value="0">0</option>
              <option value="50000" selected>
                50k
              </option>
              <option value="100000">100k</option>
              <option value="150000">150k</option>
              <option value="200000">200k</option>
              <option value="300000">300k</option>
              <option value="400000">400k</option>
              <option value="450000">450k</option>
              <option value="500000">500k</option>
              <option value="1000000">1M</option>
            </select>
          </div>
          <div class="box">
            <p>Maximum budget</p>
            <select name="max" class="input" required>
              <option value="50000" selected>
                50k
              </option>
              <option value="100000">100k</option>
              <option value="150000">150k</option>
              <option value="200000">200k</option>
              <option value="300000">300k</option>
              <option value="400000">400k</option>
              <option value="450000">450k</option>
              <option value="500000">500k</option>
              <option value="1000000">1M+</option>
            </select>
          </div>
        </div>
        <input
          type="submit"
          value="Search Property"
          name="filter_search"
          class="btn"
        />
      </form>
    </session>
  );
}

export default Filter;
