import { Component, Input, QueryList, ViewChildren, EventEmitter, Output } from "@angular/core";
import { TreeNode } from "../interfaces";

@Component({
  selector: "app-tree-node",
  templateUrl: "./tree-node.component.html",
  styleUrls: ["./tree-node.component.css"],
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;

  @Output() selectionEvent = new EventEmitter<boolean>();

  @ViewChildren(TreeNodeComponent) childNodes!: QueryList<TreeNodeComponent>;

  isSelected: boolean = false;

  constructor() {}

  toggleSelection(state: boolean, emitEvent = true) {
    this.isSelected = state;

    if (emitEvent) {
      this.selectionEvent.emit(this.isSelected);
    }

    this.childNodes?.forEach((childNode) => childNode.toggleSelection(state, false));
  }

  onChildSelectionEvent(isChildSelected: boolean) {
    const childNodes = this.childNodes.toArray();
    const areSomeNodesSelected = childNodes.some((node) => node.isSelected);
    const isChildUnselected = !isChildSelected;

    // (P:selected) child nodes -> [x:selected, y:selected, z:selected]
    // z:unselected event
    // because x and y are already in selected state, P cannot go into unselected state
    // (P:selected) child nodes -> [x:selected, y:selected, z:uselected]
    if (areSomeNodesSelected && isChildUnselected) {
      return;
    }

    this.isSelected = isChildSelected;
    this.selectionEvent.emit(this.isSelected);
  }
}
