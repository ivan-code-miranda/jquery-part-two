$(document).ready(function () {
    console.log('ready')

    let currentId = 0;

    let moviesList = [];

    $('#form').submit(function (e) { 
        e.preventDefault();

        let title = e.target[0].value;
        let rating = e.target[1].value;

        let movieData = { title, rating, currentId };

        $("#movie-table-body").append(createMovieDataHTML(movieData));
    });

    $("div").on("click", ".btn.btn-danger", function(e) {
    e.preventDefault();

    // remove it from the DOM
    $(e.target).closest('tr').remove();
    
  });
});

function createMovieDataHTML(data) {
  return `
    <tr>
      <td>Title: ${data.title}</td>
      <td>Rating: ${data.rating}</td>
      <td>
        <button id='delete' class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    </tr>
  `;
}