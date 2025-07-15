
export function FormEvent(){

    const body = `  <div class="d-flex">
    <div class="bg-light p-3" style="min-width: 200px;">
      <h4>Menu</h4>
      <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Create Event</a></li>
      </ul>
    </div>
    <div class="container-fluid p-4">
      <h2>Event List</h2>
      <table class="table table-bordered mt-3">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample Event</td>
            <td>Auditorium</td>
            <td>100</td>
            <td>
              <button class="btn btn-sm btn-primary">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`
    return body
}