/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package prefinal_domingo;
import java.util.Scanner;

/**
 *
 * @author user
 */
public class preorder {
    class Node {
      int key;
       Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }
    Node root;
    
        preorder() {
        root = null;
    }

    void insert(int key) {
        root = preorderRec(root, key);
    }

    Node preorderRec(Node root, int key) {
        if (root == null) {
            root = new Node(key);
            return root;
        }

        if (key < root.key)
            root.left = preorderRec(root.left, key);
        else if (key > root.key)
            root.right = preorderRec(root.right, key);

        return root;
    }

    void preorder() {
        preorderRec(root);
        System.out.println();
    }

    void preorderRec(Node root) {
        if (root != null) {
            System.out.print(root.key + " ");
            preorderRec(root.left);
            preorderRec(root.right);
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         Scanner scanner = new Scanner(System.in);
        preorder bst = new preorder();

        System.out.println("BINARY SEARCH TREE SIMULATION - INORDER");
        System.out.print("ENTER THE ROOT NODE: ");
        int rootValue = scanner.nextInt();
        bst.insert(rootValue);

        System.out.println("ENTER NUMBERS TO INSERT INTO THE TREE (enter -1 to stop):");
        while (true) {
            int value = scanner.nextInt();
            if (value == -1)
                break;
            bst.insert(value);
        }
        
        System.out.println("\nPREORDER TRAVERSAL:");
        bst.preorder();
    }
        
}




