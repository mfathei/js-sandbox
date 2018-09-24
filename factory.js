const MemberFactory = function(){
    this.createMember = function(name, type){
        let member;
        switch(type){
            case 'simple':
                member = new SimpleMembership(name);
                break;
            case 'super':
                member = new SuperMembership(name);
            default:
                member = new StandardMembership(name);
                break;
        }

        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }
        return member;
    }
}

const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = '$25';
}

const factory = new MemberFactory();
const members = [];
members.push(factory.createMember('Brad', 'simple'));
members.push(factory.createMember('Mahdy', 'super'));
members.push(factory.createMember('John', 'standard'));


members.forEach((member) => member.define());
