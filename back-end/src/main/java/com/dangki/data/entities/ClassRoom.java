package com.dangki.data.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Cache;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "class_room")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ClassRoom extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nhm", nullable = false)
    private Integer nhm;

    @Column(name = "tth")
    private Integer tth;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "slot")
    private Integer slot;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties(value = "classRooms", allowSetters = true)
    private Subject subject;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @NotNull
    @JoinTable(name = "class_room_details",
            joinColumns = @JoinColumn(name = "class_room_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "details_id", referencedColumnName = "id"))
    private Set<Details> details = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JoinTable(name = "class_room_user",
            joinColumns = @JoinColumn(name = "class_room_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Set<User> users = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNhm() {
        return nhm;
    }

    public ClassRoom nhm(Integer nhm) {
        this.nhm = nhm;
        return this;
    }

    public void setNhm(Integer nhm) {
        this.nhm = nhm;
    }

    public Integer getTth() {
        return tth;
    }

    public ClassRoom tth(Integer tth) {
        this.tth = tth;
        return this;
    }

    public void setTth(Integer tth) {
        this.tth = tth;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public ClassRoom quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSlot() {
        return slot;
    }

    public ClassRoom slot(Integer slot) {
        this.slot = slot;
        return this;
    }

    public void setSlot(Integer slot) {
        this.slot = slot;
    }

    public Subject getSubject() {
        return subject;
    }

    public ClassRoom subject(Subject subject) {
        this.subject = subject;
        return this;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Set<Details> getDetails() {
        return details;
    }

    public ClassRoom details(Set<Details> details) {
        this.details = details;
        return this;
    }

    public ClassRoom addDetails(Details details) {
        this.details.add(details);
        return this;
    }

    public ClassRoom removeDetails(Details details) {
        this.details.remove(details);
        return this;
    }

    public void setDetails(Set<Details> details) {
        this.details = details;
    }

    public Set<User> getUsers() {
        return users;
    }

    public ClassRoom users(Set<User> users) {
        this.users = users;
        return this;
    }

    public ClassRoom addUser(User user) {
        this.users.add(user);
        return this;
    }

    public ClassRoom removeUser(User user) {
        this.users.remove(user);
        return this;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ClassRoom)) {
            return false;
        }
        return id != null && id.equals(((ClassRoom) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ClassRoom{" +
                "id=" + getId() +
                ", nhm=" + getNhm() +
                ", tth=" + getTth() +
                ", quantity=" + getQuantity() +
                ", slot=" + getSlot() +
                "}";
    }
}