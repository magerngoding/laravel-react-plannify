import AppLayout from "@/Layouts/AppLayout";

export default function Testing() {
    return (
        <div>
            This is testing Berhasil BRO!
        </div>
    );
}

Testing.layout = (page) => <AppLayout children={page} title='Testing' />