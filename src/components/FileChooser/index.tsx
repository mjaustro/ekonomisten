export function FileChooser() {
  return (
    <div className="form-field">
      <label htmlFor="input">Välj fil med pengahistorik</label>
      <input type="file" id="input" name="input" />
    </div>
  );
}
