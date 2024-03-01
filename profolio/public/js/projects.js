function subProjects(button) {
    let title = button.dataset.name

    window.location.href = `/sub-projects?data=${encodeURIComponent(title)}`
}