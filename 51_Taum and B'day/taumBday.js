function taumBday(b, w, bc, wc, z) {
    let costBlack;
    let costWhite;

    if (bc < wc + z) {
        costBlack = bc;
    } else {
        costBlack = wc + z;
    }
    if (wc < bc + z) {
        costWhite = wc;
    } else {
        costWhite = bc + z;
    }
    let total = (BigInt(b) * BigInt(costBlack)) + (BigInt(w) * BigInt(costWhite));

    return total.toString();
}
