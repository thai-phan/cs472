let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        // add this group object to self and get title from self object
        let self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group.showList();