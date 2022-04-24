class DetailRestaurantReview extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._restaurantReviews = this._restaurant.customerReviews;
    this.render();
  }

  set asyncReviews(reviews) {
    this._restaurantReviews = reviews;
    this.render();
  }

  set sendReview(sendEvent) {
    this._sendReview = sendEvent;
    this.render();
    this.querySelector('#form_review').reset();
  }

  get inputName() {
    return this.querySelector('#inputNama').value;
  }

  get inputReview() {
    return this.querySelector('#inputReview').value;
  }

  render() {
    const restaurantReview = this._restaurantReviews;
    this.innerHTML = `
        <div class="box_customer_review">
            <div class="list_review">
                ${this.getListReview(restaurantReview)}
            </div>
            <div class="send_review">
                <form id="form_review" name="review" tabindex="0" class="form_review">
                    <div class="input_container">
                      <label for="inputNama">Nama Lengkap</label>
                      <input class="input_control" type="text" id="inputNama" placeholder="Masukkan Nama"  required>
                    </div>
                    <div class="input_container">
                      <label for="inputReview">Review</label>
                      <textarea class="input_control" id="inputReview" rows="2" placeholder="Tuliskan ulasan Anda" required></textarea>
                    </div>
                    <button class="btn_review" id="btnKirim">Kirim Review</button>
                </form>
            </div>
        </div>
    `;
    this.querySelector('#form_review').addEventListener('submit', this._sendReview);
  }

  getListReview(dataReview) {
    let reviewItem = '';
    dataReview.forEach((itemReview) => {
      reviewItem += `
        <div class="card_review">
            <p><span class="name_reviewer">${itemReview.name}</span> - <span class="date_review">${itemReview.date}</span></p>
            <p class="description_review">${itemReview.review}</p>
        </div>
        `;
    });
    return reviewItem;
  }
}

customElements.define('detail-review', DetailRestaurantReview);
