/*!
 * Please only continue reading if you understand and
 * do not mind that this code contains swear words which
 * may be offensive to some people.
 */

var clipboard = new Clipboard("button");

$("#from").on("input", function() {
    $("#to").val($(this).val()
        .toLowerCase()
        .replace(/'/g, "")
        .replace(/\bare\b/g, "r")
        .replace(/\bas fuck\b/g, "af")
        .replace(/\Bate\b/g, "8")
        .replace(/\bbabies\b/g, "bbys")
        .replace(/\bbaby\b/g, "bby")
        .replace(/\bbecause\b/g, "b/c")
        .replace(/\bbrother\b/g, "bro")
        .replace(/\bbrothers\b/g, "bros")
        .replace(/\bgood\b/g, "gud")
        .replace(/\bgoodness\b/g, "gudness")
        .replace(/\bgoods\b/g, "guds")
        .replace(/\b(got|have) to go\b/g, "gtg")
        .replace(/\bgud game\b/g, "gg")
        .replace(/\bgud job\b/g, "gj")
        .replace(/\bhave\b/g, "hav")
        .replace(/\bhow r you\b/g, "hru")
        .replace(/\bi am\b/g, "im")
        .replace(/\Bing\b/g, "in")
        .replace(/\bjust kiddin\b/g, "jk")
        .replace(/\bkill yourself\b/g, "kys")
        .replace(/\blaughin my ass off\b/g, "lmao")
        .replace(/\blaughin my fuckin ass off\b/g, "lmfao")
        .replace(/\blaughin out loud\b/g, "lol")
        .replace(/\blove\b/g, "luv")
        .replace(/\bmake\b/g, "mak")
        .replace(/\bno thank you\b/g, "nty")
        .replace(/\boh\b/g, "o")
        .replace(/\bo my g(od|udness)\b/g, "omg")
        .replace(/\bo my lord\b/g, "oml")
        .replace(/\bokay\b/g, "ok")
        .replace(/\bpeople\b/g, "ppl")
        .replace(/\bpeoples\b/g, "ppls")
        .replace(/\bplease\b/g, "pls")
        .replace(/\brollin on (the |)floor laughin\b/g, "rofl")
        .replace(/\Brve\b/g, "rv")
        .replace(/\bshakin my head\b/g, "smh")
        .replace(/\bsister\b/g, "sis")
        .replace(/\bsome\b/g, "sum")
        .replace(/\bsuck my ass\b/g, "sma")
        .replace(/\bsuck my dick\b/g, "smd")
        .replace(/\btext\b/g, "txt")
        .replace(/\btexts\b/g, "txts")
        .replace(/\bthanks\b/g, "thx")
        .replace(/\bthank you\b/g, "ty")
        .replace(/\bthat\b/g, "dat")
        .replace(/\bthis\b/g, "dis")
        .replace(/\btoo\b/g, "to")
        .replace(/\bwelcome back\b/g, "wb")
        .replace(/\bwhat\b/g, "wut")
        .replace(/\bwhatever\b/g, "w/e")
        .replace(/\bwhats\b/g, "wuts")
        .replace(/\bwith\b/g, "w/")
        .replace(/\bwithin\b/g, "w/i")
        .replace(/\bwithout\b/g, "w/o")
        .replace(/\bwut about you\b/g, "wbu")
        .replace(/\byou\b/g, "u")
        .replace(/\byoull\b/g, "ull")
        .replace(/\bu only live once\b/g, "yolo")
        .replace(/\byour(|e)\b/g, "ur")
    );
});

clipboard.on("success", function(event) {
    $("button").attr("data-original-title", "Copied!");
    $("button").tooltip("show");
    event.clearSelection();
}).on("error", function(event) {
    $("button").attr("data-original-title", "Error; please copy manually.");
    $("button").tooltip("show");
});

$("button").click(function() {
    if (!$("#to").val().trim()) {
        $("button").attr("data-original-title", "There's nothing to copy!");
        $("button").tooltip("show");
        return false;
    }
});

$("button").mouseleave(function() {
    $("button").tooltip("hide");
});
