function fn_ValForm() {
    var sMsg = "";
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umurStr = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var emailPattern = /^[a-z0-9][a-z0-9_\.-][a-z0-9]@[a-z0-9][a-z0-9_\.-][a-z0-9]\.[a-z0-9]{2,4}$/;

    if (nama == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
     if (email == "") {
        sMsg += "\n* Email tidak boleh kosong";
    } else if (!emailPattern.test(email)) {

            sMsg += "\n* Email tidak valid";
    }
    if (umurStr == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    }
    if (kategori == "") {
        sMsg += "\n* Anda belum mengisikan koleksi favorit";
    }

    if (sMsg != "") {
        alert("Peringatan: " + sMsg);
        return false;
    }

    var pilihan = "";
    switch (kategori) {
        case "F":
            pilihan = "Fiksi";
            break;
        case "N":
            pilihan = "Non-Fiksi";
            break;
        case "J":
            pilihan = "Jurnal Ilmiah";
            break;
        default:
            pilihan = "Tidak Diketahui";
            break;
    }

    var umur = parseInt(umurStr);
    var info = "";
    if (umur <= 17) {
        info = "Anggota Pelajar";
    } else {
        info = "Anggota Umum";
    }

    alert("Terima kasih " + nama + " ! Anda terdaftar di koleksi " + pilihan + " (" + info + ").");
    return true;
}