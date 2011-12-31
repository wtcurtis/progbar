var prog = function(element, options) {
    options = options || {};
    this.rounded = options.rounded === undefined ? true : options.rounded;
    this.morticeColor = options.morticeColor || 'blue';
    this.containerColor = options.morticeColor || 'blue';
    this.barColor = options.morticeColor || 'blue';
    this.progress = options.initialProgress === undefined ? 
        0 : options.initialProgress;
    this.tiny = options.tiny === undefined ? true : options.tiny;
    this.container = $(element);
    
    this.mortice = $('<div></div>').appendTo(this.container);
    this.bar = $('<div></div>').appendTo(this.mortice);
    
    this.resetClasses();
}

prog.prototype = {
    constructor: prog,
    availableColors: ['blue', 'orange', 'pink', 'purple', 'green', 'default'],
    setProgress: function(v) {
        this.progress = v;
        this.bar.css('width', v + '%');
    },
    
    setColor: function(color) {
        if(prog.prototype.availableColors.indexOf(color) === -1) {
            color = 'default';
        }
        this.morticeColor = color;
        this.barColor = color;
        this.containerColor = color;
        this.resetClasses();
    },

    setContainerColor: function(color) {
        this.containerColor = color;
        this.resetClasses();
    },

    setMorticeColor: function(color) {
        this.morticeColor = color;
        this.resetClasses();
    },

    setProgressColor: function(color) {
        this.barColor = color;
        this.resetClasses();
    },

    resetClasses: function() {
        this.container[0].className = 
            this.container[0].className.replace(/\w+_container/g, '');
        this.container.addClass('bar_container');
        if(this.containerColor !== 'default') {
            this.container.addClass(this.containerColor + '_container');
        }
        if(this.rounded) { this.container.addClass('rounded_bar_container'); }

        this.mortice[0].className = 
            this.mortice[0].className.replace(/\w+_mortice/g, '');
        this.mortice.removeClass('rounded');
        this.mortice.addClass('bar_mortice');
        if(this.morticeColor !== 'default') {
            this.mortice.addClass(this.morticeColor + '_mortice');
        }
        if(this.rounded) { this.mortice.addClass('rounded'); }

        this.bar[0].className = '';
        this.bar.addClass('progress');
        if(this.barColor !== 'default') {
            this.bar.addClass(this.barColor);
        }
        if(this.rounded) { this.bar.addClass('rounded'); }
    },

    step: function(delta) {
        var next = this.progress + delta;
        if(next < 0) {
            next = 0;
        } else if(next > 100) {
            next = 100;
        }
        this.setProgress(next);
    }
};

