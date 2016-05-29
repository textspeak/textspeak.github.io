var clipboard = new Clipboard("button");

$("#from").on("input", function() {
    $("#to").val($(this).val()
        .toLowerCase()
        .replace(/'/g, "")
        .replace(/\bare\b/g, "r")
        .replace(/\bbaby\b/g, "bby")
        .replace(/\bbabies\b/g, "bbys")
        .replace(/\bbecause\b/g, "b/c")
        .replace(/\bbrother\b/g, "bro")
        .replace(/\bbrothers\b/g, "bros")
        .replace(/\bcry\b/g, "cri")
        .replace(/\bgood\b/g, "gud")
        .replace(/\bgoods\b/g, "guds")
        .replace(/\b(got|have) to go\b/g, "gtg")
        .replace(/\bgud game\b/g, "gg")
        .replace(/\bgud job\b/g, "gj")
        .replace(/\bhow r you\b/g, "hru")
        .replace(/\Bing\b/g, "in")
        .replace(/\bjust kiddin\b/g, "jk")
        .replace(/\bkill yourself\b/g, "kys")
        .replace(/\blaughin my ass off\b/g, "lmao")
        .replace(/\blaughin my fuckin ass off\b/g, "lmfao")
        .replace(/\blaughin out loud\b/g, "lol")
        .replace(/\bpeople\b/g, "ppl")
        .replace(/\bpeoples\b/g, "ppls")
        .replace(/\brollin on (the |)floor laughin\b/g, "rofl")
        .replace(/\bshakin my head\b/g, "smh")
        .replace(/\bsister\b/g, "sis")
        .replace(/\bsuck my ass\b/g, "sma")
        .replace(/\bsuck my dick\b/g, "smd")
        .replace(/\btext\b/g, "txt")
        .replace(/\btexts\b/g, "txts")
        .replace(/\bthanks\b/g, "thx")
        .replace(/\bthank you\b/g, "ty")
        .replace(/\bthat\b/g, "dat")
        .replace(/\bthis\b/g, "dis")
        .replace(/\btoo\b/g, "to")
        .replace(/\byou\b/g, "u")
        .replace(/\bu only live once\b/g, "yolo")
        .replace(/\b(your|youre)\b/g, "ur")
        .replace(/\bwelcome back\b/g, "wb")
        .replace(/\bwhat\b/g, "wut")
        .replace(/\bwhatever\b/g, "w/e")
        .replace(/\bwhats\b/g, "wuts")
    );
});

clipboard.on("success", function(event) {
    $("button").attr("title", "Copied!");
    $("button").tooltip("show");
    $("button").removeAttr("title");
    event.clearSelection();
}).on("error", function(event) {
    $("button").attr("title", "Error; please copy manually.");
    $("button").tooltip("show");
    $("button").removeAttr("title");
});

$("button").click(function() {
    if (!$("#to").val().trim()) {
        return false;
    }
});

$("button").mouseleave(function() {
    $("button").tooltip("hide");
});
