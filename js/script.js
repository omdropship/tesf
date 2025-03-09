$(document).ready(function() {
    console.log("Kelinci framework loaded!");

    // Tombol interaktif
    $(".kelinci-button").on("click", function() {
        alert("Tombol Kelinci diklik!");
    });

    // Modal
    $(".kelinci-modal").each(function() {
        let modal = $(this);
        
        // Menutup modal saat klik di luar modal
        $(document).on("click", function(event) {
            if (!$(event.target).closest(".kelinci-modal, .kelinci-open-modal").length) {
                modal.removeClass("show");
            }
        });
    });

    // Buka modal
    $(".kelinci-open-modal").on("click", function() {
        let target = $(this).data("target");
        $(target).addClass("show");
    });

    // Tutup modal
    $(".kelinci-close-modal").on("click", function() {
        $(this).closest(".kelinci-modal").removeClass("show");
    });
});
