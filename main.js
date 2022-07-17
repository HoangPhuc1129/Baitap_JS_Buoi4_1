// Bài 1
/**Mô hình 3 khối
 * Đầu vào:
 * -
 * -
 * Xử lí:
 * -
 * -
 * -
 * -
 * -
 * -
 * Đầu ra:
 * -
 * -
 */

document.getElementById(`sapSep`).onclick = function () {
  var tagSoNguyen1 = document.getElementById(`soNguyen1`).value * 1;
  var tagSoNguyen2 = document.getElementById(`soNguyen2`).value * 1;
  var tagSoNguyen3 = document.getElementById(`soNguyen3`).value * 1;

  if (tagSoNguyen1 < tagSoNguyen2 && tagSoNguyen2 < tagSoNguyen3) {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen1 + " < " + tagSoNguyen2 + " < " + tagSoNguyen3;
  } else if (tagSoNguyen1 < tagSoNguyen2 && tagSoNguyen3 < tagSoNguyen1) {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen3 + " < " + tagSoNguyen1 + " < " + tagSoNguyen2;
  } else if (tagSoNguyen1 < tagSoNguyen3 && tagSoNguyen2 < tagSoNguyen1) {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen2 + " < " + tagSoNguyen1 + " < " + tagSoNguyen3;
  } else if (tagSoNguyen1 < tagSoNguyen3 && tagSoNguyen3 < tagSoNguyen2) {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen1 + " < " + tagSoNguyen3 + " < " + tagSoNguyen2;
  } else if (tagSoNguyen3 < tagSoNguyen2 && tagSoNguyen2 < tagSoNguyen1) {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen3 + " < " + tagSoNguyen2 + " < " + tagSoNguyen1;
  } else {
    document.getElementById(`footer`).innerHTML =
      "Kết Quả : " + tagSoNguyen2 + " < " + tagSoNguyen3 + " < " + tagSoNguyen1;
  }
  document.getElementById(`footer`).classList =
    "card-footer text-center text-white bg-dark";
};

// Bài 2
/**Mô hình 3 khối :
 * Đầu vào:
 * -
 * -
 * Xử lý:
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * Đầu ra:
 * -
 * -
 */
function loiChao() {
  var tagThanhVien = document.getElementById(`thanhVien`).value;
  var tagLoiChao = "Xin Chào";
  if (tagThanhVien == `bo`) {
    document.getElementById(`answer`).value = tagLoiChao + " Bố !";
  } else if (tagThanhVien == `me`) {
    document.getElementById(`answer`).value = tagLoiChao + " Mẹ !";
  } else if (tagThanhVien == `anhTrai`) {
    document.getElementById(`answer`).value = tagLoiChao + " Anh Trai !";
  } else if (tagThanhVien == `emGai`) {
    document.getElementById(`answer`).value = tagLoiChao + " Em Gái !";
  } else {
    document.getElementById(`answer`).value = tagLoiChao + " Người Lạ !";
  }
}

//Bài 3
/** Mô Hình 3 Khối
 * Đầu vào:
 * -
 * -
 * Xử lí :
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * Đầu ra:
 * -
 * -
 *
 */
document.getElementById(`dem`).onclick = function () {
  var tagSo1 = Number(document.getElementById(`so1`).value);
  var tagSo2 = Number(document.getElementById(`so2`).value);
  var tagSo3 = Number(document.getElementById(`so3`).value);

  var soChan = 0;
  var soLe = 0;
  if (tagSo1 % 2 === 0) {
    soChan++;
  }
  if (tagSo2 % 2 === 0) {
    soChan++;
  }
  if (tagSo3 % 2 === 0) {
    soChan++;
  }
  soLe = 3 - soChan;
  document.getElementById(`count`).value =
    "Có " + soChan + " số chẵn, " + soLe + " số lẻ.";
};

// Bài 4
/** Mô Hình 3 Khối
 * Đầu vào:
 * -
 * -
 * Xử lí :
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * -
 * Đầu ra:
 * -
 * -
 *
 */
document.getElementById(`xuLi`).onclick = function () {
  var tagCanh1 = document.getElementById(`canh1`).value * 1;
  var tagCanh2 = document.getElementById(`canh2`).value * 1;
  var tagCanh3 = document.getElementById(`canh3`).value * 1;
  if (tagCanh1 === tagCanh2 && tagCanh2 === tagCanh3) {
    document.getElementById(`tamGiac`).value = " Đây là tam giác cân !";
  } else if (
    tagCanh1 === tagCanh2 ||
    tagCanh2 === tagCanh3 ||
    tagCanh1 === tagCanh3
  ) {
    document.getElementById(`tamGiac`).value = " Đây là tam giác đều !";
  } else if (
    Math.pow(tagCanh1, 2) == Math.pow(tagCanh2, 2) + Math.pow(tagCanh3, 2) ||
    Math.pow(tagCanh2, 2) == Math.pow(tagCanh1, 2) + Math.pow(tagCanh3, 2) ||
    Math.pow(tagCanh3, 2) == Math.pow(tagCanh2, 2) + Math.pow(tagCanh1, 2)
  ) {
    document.getElementById(`tamGiac`).value = " Đây là tam giác vuông !";
  } else {
    document.getElementById(`tamGiac`).value = " Đây là tam giác khác!";
  }
};
