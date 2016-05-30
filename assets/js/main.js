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
        .replace(/\balso known as\b/g, "aka")
        .replace(/\bare\b/g, "r")
        .replace(/\bas fuck\b/g, "af")
        .replace(/ate\b/g, "8")
        .replace(/\baway from keyboard\b/g, "afk")
        .replace(/\bbabies\b/g, "bbys")
        .replace(/\bbaby\b/g, "bby")
        .replace(/\bbecause\b/g, "b/c")
        .replace(/\bbe right back\b/g, "brb")
        .replace(/\bbest friend(|,) forever\b/g, "bff")
        .replace(/\bbest friends(|,) forever\b/g, "bffs")
        .replace(/\bbrother\b/g, "bro")
        .replace(/\bbrothers\b/g, "bros")
        .replace(/\bby the way\b/g, "btw")
        .replace(/\bdo it yourself\b/g, "diy")
        .replace(/\belite\b/g, "1337")
        .replace(/\bfor real\b/g, "fr")
        .replace(/\bf(or the win|uck the world)\b/g, "ftw")
        .replace(/\bfor your information\b/g, "fyi")
        .replace(/\bfrequently asked question(|s)\b/g, "faq")
        .replace(/\bgood\b/g, "gud")
        .replace(/\bgoodness\b/g, "gudness")
        .replace(/\bgoods\b/g, "guds")
        .replace(/\b(got|have) to go\b/g, "gtg")
        .replace(/\bgud game\b/g, "gg")
        .replace(/\bgud job\b/g, "gj")
        .replace(/\bhave\b/g, "hav")
        .replace(/\bhav fun\b/g, "hf")
        .replace(/\bhow r you\b/g, "hru")
        .replace(/\bi am\b/g, "im")
        .replace(/\bi dont care\b/g, "idc")
        .replace(/\bi dont fucking know\b/g, "idfk")
        .replace(/\bi dont know\b/g, "idk")
        .replace(/\bi love you\b/g, "ily")
        .replace(/\Bing\b/g, "in")
        .replace(/\bin my h(onest|umble) opinion\b/g, "imho")
        .replace(/\bin my opinion\b/g, "imo")
        .replace(/\bin real life\b/g, "irl")
        .replace(/\bjust kiddin\b/g, "jk")
        .replace(/\bkill yourself\b/g, "kys")
        .replace(/\blaughin my ass off\b/g, "lmao")
        .replace(/\blaughin my fuckin ass off\b/g, "lmfao")
        .replace(/\blaughin out loud\b/g, "lol")
        .replace(/\blove\b/g, "luv")
        .replace(/\bnever mind\b/g, "nvm")
        .replace(/\bnewbie\b/g, "noob")
        .replace(/\bno problem\b/g, "np")
        .replace(/\bnot a(vailable|pplicable)\b/g, "n/a")
        .replace(/\bno thank you\b/g, "nty")
        .replace(/\bnothing much\b/g, "nm")
        .replace(/\boh\b/g, "o")
        .replace(/\bo my g(od|udness)\b/g, "omg")
        .replace(/\bo my lord\b/g, "oml")
        .replace(/\bokay\b/g, "ok")
        .replace(/\bo(verpowered|riginal post(|er))\b/g, "op")
        .replace(/\bpeople\b/g, "ppl")
        .replace(/\bpeoples\b/g, "ppls")
        .replace(/\bplease\b/g, "pls")
        .replace(/\bpoint of view\b/g, "pov")
        .replace(/\bprofessional\b/g, "pro")
        .replace(/\bright now\b/g, "rn")
        .replace(/\brollin on (the |)floor laughin\b/g, "rofl")
        .replace(/\Brve\b/g, "rv")
        .replace(/\bsee\b/g, "c")
        .replace(/\bshakin my head\b/g, "smh")
        .replace(/\bsister\b/g, "sis")
        .replace(/\bsome\b/g, "sum")
        .replace(/\bsuck my ass\b/g, "sma")
        .replace(/\bsuck my dick\b/g, "smd")
        .replace(/\btalk to you later\b/g, "ttyl")
        .replace(/\btext\b/g, "txt")
        .replace(/\btexts\b/g, "txts")
        .replace(/\bthanks\b/g, "thx")
        .replace(/\bthank you\b/g, "ty")
        .replace(/\bthat\b/g, "dat")
        .replace(/\bthe fuck\b/g, "tf")
        .replace(/\bthis\b/g, "dis")
        .replace(/\bto be an(nounced|swered)\b/g, "tba")
        .replace(/\bt(wo|o(|o))\b/g, "2")
        .replace(/\b2 much information\b/g, "tmi")
        .replace(/\bty very much\b/g, "tyvm")
        .replace(/\bwelcome back\b/g, "wb")
        .replace(/\bwhat\b/g, "wut")
        .replace(/\bwhatever\b/g, "w/e")
        .replace(/\bwhats\b/g, "wuts")
        .replace(/\bwith\b/g, "w/")
        .replace(/\bwithin\b/g, "w/i")
        .replace(/\bwithout\b/g, "w/o")
        .replace(/\bwut about you\b/g, "wbu")
        .replace(/\bwut the fuck\b/g, "wtf")
        .replace(/\bwut the he(ll|ck)\b/g, "wth")
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
