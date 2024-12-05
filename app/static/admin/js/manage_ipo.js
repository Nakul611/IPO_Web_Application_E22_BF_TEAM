document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            company: "Adani Power",
            priceBand: "₹129 - ₹136",
            open: "2024-06-03",
            closeDate: "2024-06-05",
            issueSize: "₹130.15 Cr.",
            issueType: "Book Built",
            listingDate: "2024-06-10",
            status: "Ongoing",
        },
        {
            company: "VBL LTD",
            priceBand: "₹129 - ₹136",
            open: "2024-06-03",
            closeDate: "2024-06-05",
            issueSize: "₹130.15 Cr.",
            issueType: "Book Built",
            listingDate: "2024-06-10",
            status: "Coming",
        },
        {
            company: "Tata Motor",
            priceBand: "₹129 - ₹136",
            open: "2024-06-03",
            closeDate: "2024-06-05",
            issueSize: "₹130.15 Cr.",
            issueType: "Book Built",
            listingDate: "2024-06-10",
            status: "New Listed",
        },
    ];

    const tableBody = document.querySelector("table tbody");
    data.forEach((ipo) => {
        const statusClass = getStatusClass(ipo.status); // Determine the status class
        const row = `
            <tr>
                <td>${ipo.company}</td>
                <td>${ipo.priceBand}</td>
                <td>${ipo.open}</td>
                <td>${ipo.closeDate}</td>
                <td>${ipo.issueSize}</td>
                <td>${ipo.issueType}</td>
                <td>${ipo.listingDate}</td>
                <td class="status ${statusClass}">${ipo.status}</td>
                <td><button class="btn-action">Update</button></td>
                <td>
                    <button class="btn-delete"><i class='bx bx-trash'></i></button>
                    <button class="btn-view"><i class='bx bx-note'></i></button>
                </td>
            </tr>`;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
});

// Helper function to determine the CSS class based on the status
function getStatusClass(status) {
    if (status === "Ongoing") return "status-ongoing";
    if (status === "Coming") return "status-coming";
    if (status === "New Listed") return "status-new";
    return "";
}