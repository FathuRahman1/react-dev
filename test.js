class Timer {
  detik = 0;
  mulai() {
    setTimeout(function () {
      this.detik += 1;
      console.log(this.detik)
    }, 1000);
  }
}
const waktu1 = new Timer();
waktu1.mulai();