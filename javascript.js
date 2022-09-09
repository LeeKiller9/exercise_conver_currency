const vnd_usd = 23525
const usd_jpy = 142
const usd_eur = 0.99
let result = null

function convert_currency() {
    let amount_id = document.getElementById("amount_in")
    let amount = parseInt(amount_id.value)
    let from_id = document.getElementById("from")
    let from = from_id.value
    let to_id = document.getElementById("to")
    let to = to_id.value
    let result_id = document.getElementById("result")
    if (from === "vnd") {
        switch (to) {
            case "usd":
                result = amount / vnd_usd
                break
            case "jpy":
                result = amount / vnd_usd * usd_jpy
                break
            case "eur":
                result = amount / vnd_usd * usd_eur
        }
    } else if (from === "usd") {
        switch (to) {
            case "vnd":
                result = amount * vnd_usd
                break
            case "jpy":
                result = amount * usd_jpy
                break
            case "eur":
                result = amount * usd_eur
        }
    } else if (from === "jpy") {
        switch (to) {
            case "usd":
                result = amount / usd_jpy
                break
            case "vnd":
                result = amount / usd_jpy * vnd_usd
                break
            case "eur":
                result = amount / usd_jpy * usd_eur
        }
    } else {
        switch (to) {
            case "usd":
                result = amount / usd_eur
                break
            case "vnd":
                result = amount / usd_eur * vnd_usd
                break
            case "jpy":
                result = amount / usd_eur * usd_jpy
        }
    }
    result_id.innerHTML = "Result: " + result
}