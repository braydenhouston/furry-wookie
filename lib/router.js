Router.after(function(){
    if (this.route.options.title)
        document.title = this.route.options.title;
});

Router.route("/", {
     name: "homeIndex",
     title: "Home"
});
