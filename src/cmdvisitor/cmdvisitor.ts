import { BookMark } from "@/model/bookmark/bookmark";
import { Driver } from "@/driver/driver"

export namespace CmdVisitor {
    export class AddTitleVisitor extends BookMark.UnitVisitor {
        private parentDir: string;
        private childrenDir: string;

        constructor(cdir: string, pdir: string) {
            super();
            this.childrenDir = cdir;
            this.parentDir = pdir;
        }
    
        public visit(unit: BookMark.Unit): boolean {
            if (this.parentDir == unit.data.label) {
                let newdata: BookMark.UnitData = new BookMark.UnitData(unit.data.level + 1, this.childrenDir, new Array<BookMark.Item>, new Object());
                let newUnit: BookMark.Unit = new BookMark.Unit(newdata, new Array<BookMark.Unit>);
                unit.children.push(newUnit);
                return false;
            }
            return true;
        }
    }


    export class DeleteTitleVisitor extends BookMark.UnitVisitor {
        dirToDelete: string;
        parentDir: string;

        constructor(dir: string, pdir: string) {
            super();
            this.dirToDelete = dir;
            this.parentDir = pdir;
        }

        public visit(unit: BookMark.Unit): boolean {
            if (unit.data.label == this.parentDir) {
                //delete current node and all its children
                for (let idx = 0; idx < unit.children.length; idx++) {
                    if (unit.children[idx].data.label == this.dirToDelete) {
                        unit.children.splice(idx, 1);
                        return false;
                    }
                }
                return false;
            }
            return true;
        }
    }


    export class CdVisitor extends BookMark.UnitVisitor {
        private toDir: string;
        private dv: Driver;

        constructor(td: string, dv: Driver) {
            super();
            this.toDir = td;
            this.dv = dv;
        }

        public visit(unit: BookMark.Unit): boolean {
            if (this.toDir == this.dv.getMaster().data.label || this.toDir == "master") {
                this.dv.setUnit(this.dv.getMaster());
                return false;
            }
            if (unit.data.label == this.toDir) {
                this.dv.setWorkDir(unit);
                return false;
            }
            return true;
        }
    }


    export class PrintTreeVisitor extends BookMark.UnitVisitor {
        public visit(unit: BookMark.Unit): boolean {
            let message: String = "";
            for (let idx = 0; idx < unit.data.level; idx++) {
                message = message.concat("  ");
            }
            console.log(message + "└─" + "T." + unit.data.label);
            for (let idx = 0; idx < unit.data.items.length; idx++) {
                if (idx + 1 == unit.data.items.length) {
                    if (unit.data.items[idx].appendix == true)
                        console.log(message + "  " + "└─" + "*L." + unit.data.items[idx].label);
                    console.log(message + "  " + "└─" + "L." + unit.data.items[idx].label);
                    continue;
                }
                if (unit.data.items[idx].appendix == true)
                    console.log(message + "  " + "├─" + "*L." + unit.data.items[idx].label);
                console.log(message + "  " + "├─" + "L." + unit.data.items[idx].label);
            }
            return true;
        }
    };
}//end of cmdvisitor