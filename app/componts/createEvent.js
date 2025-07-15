
export function CreateEvent(){

    const body = `<body class="bg-light">
  <div class="container mt-5">
    <div class="card p-4 shadow-sm">
      <h3 class="mb-3">Create Event</h3>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Event Title">
        </div>
        <div class="mb-3">
          <label for="location" class="form-label">Location</label>
          <input type="text" class="form-control" id="location" placeholder="Event Location">
        </div>
        <div class="mb-3">
          <label for="capacity" class="form-label">Capacity</label>
          <input type="number" class="form-control" id="capacity" placeholder="Event Capacity">
        </div>
        <button type="submit" class="btn btn-success">Create</button>
      </form>
    </div>
  </div>
</body>`
    return body
}