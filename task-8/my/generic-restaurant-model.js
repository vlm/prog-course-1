var GenericRestaurantModel = Backbone.Model.extend({

    defaults: {
        state: "open",
        currentOccupancy: 0
    },

    validate: function(attributes) {
        switch(attributes.state) {
        case "open":
            if(attributes.currentOccupancy < 0)
                return "Number of visitors must not be negative";
            break;
        case "closed":
            if(attributes.currentOccupancy == 0)
                return "Number of visitors in a closed restaurant must be 0";
            break;
        default:
            return "Expected 'open' or 'close' state";
        }
    },

    visitorCame: function() {
        return this.set({currentOccupancy: this.get("currentOccupancy") + 1 },
                        {validate: true});
    },

    visitorLeft: function() {
        return this.set({currentOccupancy: this.get("currentOccupancy") - 1 },
                        {validate: true});
    },

    openRestaurant: function() {
        this.set("state", "open");
    },

    closeRestaurant: function() {
        if(this.get("state") == "open") {
            if(this.get("currentOccupancy") == 0)
                this.set("state", "closed");
            else
                throw "Can't close restaurant which still has visitors!";
        }
    }

});

