$(document).ready(function () {
    // Define the ContentItem class
    class ContentItem {
        
        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (this.id === id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (category !== null) {
                    this.category = category;
                }
            }
        }

        toString() {
            return `
                <div id="content-item-${this.id}" class="content-item-wrapper">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.category}</div>
                </div>
            `;
        }
    }

    // array of 5 content items
    const contentItems = [
        new ContentItem(0, "Lionel Messi", "Argentine professional footballer", "Forward"),
        new ContentItem(1, "Cristiano Ronaldo", "Portuguese professional footballer", "Forward"),
        new ContentItem(2, "Neymar Jr.", "Brazilian professional footballer", "Forward"),
        new ContentItem(3, "Sergio Ramos", "Spanish professional footballer", "Defender"),
        new ContentItem(4, "Kevin De Bruyne", "Belgian professional footballer", "Midfielder")
    ];

    // Display the content items on the page
    const contentList = $("#content-item-list");

    contentItems.forEach(item => {
        const html = item.toString();
        contentList.append(html);
    });

    // Add styling
    $(".content-item-wrapper").css({
        "border": "2px solid black",
        "width": "auto",
        "padding": "10px",
        "margin": "0",
        "margin-bottom": "10px"
    });
    

    // BONUS: Add event handlers for the update buttons (successful and unsuccessful) if needed.
    $("#updateSuccessful").click(function () {
        contentItems[0].updateContentItem(0, "Updated Messi", null, null);
        $("#content-item-0").html(contentItems[0].toString());
    }
    );
    $("#updateUnsuccessful").click(function () {
        contentItems[6].updateContentItem(6, "Invalid Player", null, null);
        $("#content-item-6").html(contentItems[6].toString());
    }
    );
});
