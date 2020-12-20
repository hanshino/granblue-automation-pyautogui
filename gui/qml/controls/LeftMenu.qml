import QtQuick 2.15
import QtQuick.Controls 2.15
import QtGraphicalEffects 1.15

Button{
    id: left_menu_button
    text: qsTr("Left Menu Text")

    // Custom Properties
    property url buttonIconSource: "../../images/svg_images/home_icon.svg"
    property color buttonColorDefault: "#242424"
    property color buttonColorMouseOver: "#23272E"
    property color buttonColorClicked: "#00a1f1"
    property int iconWidth: 18
    property int iconHeight: 18
    property color activeMenuColor: "#55aaff"
    property color activeMenuColorRight: "#2e2e4d"
    property bool isActiveMenu: false

    QtObject{
        id: internal

        // This will control the color of the button when hovering over it and clicking it.
        property var dynamicColor: if(left_menu_button.down){
                                       left_menu_button.down ? buttonColorClicked : buttonColorDefault
                                   }else{
                                       left_menu_button.hovered ? buttonColorMouseOver : buttonColorDefault
                                   }
    }

    implicitWidth: 250
    implicitHeight: 60

    background: Rectangle{
        id: button_background
        color: internal.dynamicColor

        Rectangle{
            anchors{
                top: parent.top
                left: parent.left
                bottom: parent.bottom
            }

            color: activeMenuColor
            width: 3
            visible: isActiveMenu
        }

        Rectangle{
            anchors{
                top: parent.top
                right: parent.right
                bottom: parent.bottom
            }

            color: activeMenuColorRight
            width: 5
            visible: isActiveMenu
        }
    }

    contentItem: Item{
        id: content

        Image{
            id: button_icon
            source: buttonIconSource
            anchors.leftMargin: 26

            anchors.verticalCenter: parent.verticalCenter
            anchors.left: parent.left

            sourceSize.width: iconWidth
            sourceSize.height: iconHeight

            height: 18
            width: 18

            fillMode: Image.PreserveAspectFit

            visible: false
        }

        ColorOverlay{
            anchors.fill: button_icon
            source: button_icon

            color: "#ffffff"

            anchors.verticalCenter: parent.verticalCenter

            antialiasing: true

            width: iconWidth
            height: iconHeight
        }

        Text{
            color: "#ffffff"
            text: left_menu_button.text
            font: left_menu_button.font
            anchors.verticalCenter: parent.verticalCenter
            anchors.left: parent.left
            anchors.leftMargin: 75
        }
    }
}

/*##^##
Designer {
    D{i:0;autoSize:true;formeditorZoom:2;height:60;width:250}
}
##^##*/
