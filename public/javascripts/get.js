var sq;
function signin()
{
    sq = "INSERT INTO user (id, password) VALUES ('" + document.getElementById('inid').value + "', '"+ document.getElementById('inpassword').value + "')";
    console.log(sq)
    res.cookies('sql', sq);
}