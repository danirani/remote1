
const layout = "abcde123fghij456klmno789pqrst.@0uvwxyz_/";
const blockSize=8;

const getButtonPresses = (c1,c2) => Math.abs(c1.row-c2.row) + Math.abs(c1.col-c2.col);
const getCoordinate = (cursorChar) => {

    // return a coordinate {row,col}
    // where row 0 -> 4, column 0->7

    const index=layout.indexOf(cursorChar)
    const row = Math.floor(index/blockSize) % blockSize;

    return {
        row: row,
        col: Math.abs(index-row*blockSize)
    };
}

const tvRemote = word => {

    let lastCoordinate = getCoordinate('a');

    return [...word].reduce( (total,cursorChar) => {

        const newCoordinate= getCoordinate(cursorChar);

        // add one for the OK button
        const countButtonPresses=getButtonPresses(newCoordinate,lastCoordinate)+1;

        lastCoordinate=newCoordinate;

        return total+countButtonPresses;

    },0);
}

module.exports = {tvRemote};


